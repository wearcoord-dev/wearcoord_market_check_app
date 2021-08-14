import { Button, makeStyles } from "@material-ui/core";
import { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useCreateUserFace } from "../../../hooks/user/useCreateUserFace";
import { UserContext } from "../../providers/UserProvider";
import sampleimg from "../../../../../public/img/others/face/face_crop_sample.png"
import noimg from "../../../../../public/img/others/face/noimg.png"
import axios from "axios";

const useStyles = makeStyles({
    faceref: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    imgbox: {
        width: '50%',
        textAlign: 'center',
    },
    img: {
        width: '50%',
    },
    imgp: {
        padding: '10px 0',
    },
    canvaswrap: {
        display: "flex",
        justifyContent: "center",
        margin: "20px auto",
        width: '30%',
        flexDirection: 'column',
    },
    uploadwrap: {
        textAlign: 'center',
        padding: '10px 0',
    },
    iconimg: {
        width: '100%',
        maxWidth: '50px',
    },
    input: {
        opacity: 0,
        display: 'none',
    }
});



export const SetUserFace = memo(() => {
    const classes = useStyles();
    const { CreateUserFace } = useCreateUserFace();
    const context = useContext(UserContext);

    // console.log(context.contextName);

    const [upImg, setUpImg] = useState();
    const [trimmedSrc, setTrimmedSrc] = useState(null);

    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1.15 });
    const [completedCrop, setCompletedCrop] = useState(null);

    // 既存の画像を削除

    const onClickDelete  = () => {
        console.log(context.contextName.id);

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }

        const setData = {
            "id": context.contextName.id,
        }
        const url = '/api/setting/deleteimg';
        // console.log(setData);

        axios.post(url, setData, header).then((res) => {
            // console.log(res);
            // history.push('/main/mycoord');
            window.location.href = '/main/settings/face';
        }).catch(() => {
        }).finally(() => {
        });
    }

    function generateDownload(canvas, crop) {
        if (!crop || !canvas) {
            return;
        }

        CreateUserFace(trimmedSrc, context);

    }

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);

    useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
            return;
        }

        const image = imgRef.current;
        const canvas = previewCanvasRef.current;
        const crop = completedCrop;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;

        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        const contentType = image.src.split(';')[0].split(':')[1];
        setTrimmedSrc(canvas.toDataURL(contentType));
    }, [completedCrop]);

    console.log(completedCrop);

    return (
        <div className="App">
            {context.contextName ? (
                <div className={classes.faceref}>
                    <div className={classes.imgbox}>

                        {context.contextName.faceImg ? <img className={classes.img} src={context.contextName.faceImg} alt="" /> : (
                            <div style={{ height: '80px' }}>
                                <img className={classes.iconimg} src={noimg} alt="" />
                                <p>画像が登録されていません</p>
                            </div>
                        )}
                        <p className={classes.imgp}>現在の登録済み画像</p>
                    </div>
                    <div className={classes.imgbox}>
                        <img className={classes.img} src={sampleimg} alt="" />
                        <p className={classes.imgp}>切り抜き参考サイズ</p>
                    </div>
                </div>
            ) : <p>画像がありません</p>}

            {context.contextName ? (
                <>
                    {context.contextName.faceImg ? (
                        <Button
                            style={{ left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width: "200px", padding: "10px 0", color: "#fff", marginTop: "10px" }}
                            onClick={onClickDelete}
                        >
                            フェイス画像を削除する
                        </Button>
                    ) : (
                        <></>
                    )}
                </>
            ) : <p>なし</p>}

            {/* <div className={classes.uploadwrap}>
                <input type="file" accept="image/*" onChange={onSelectFile} />
            </div> */}

            <Button
                component="label"
                htmlFor="file_input"
                style={{ left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width: "200px", padding: "10px 0", color: "#fff", margin: "10px 0" }}
            >
                フェイス画像を選択する
                <input
                    type="file"
                    className={classes.input}
                    accept="image/*"
                    id="file_input"
                    onChange={onSelectFile}
                />
            </Button>

            <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                style={{ width: "300px", display: "flex", margin: "auto" }}
            />
            {completedCrop !== null ? (
                <>
                    <div className={classes.canvaswrap}>
                        <canvas
                            ref={previewCanvasRef}
                            // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                            style={{
                                // width: Math.round(completedCrop?.width ?? 0),
                                // height: Math.round(completedCrop?.height ?? 0),
                                width: '100%',
                                borderRadius: "50%"
                            }}
                        />
                        <p className={classes.imgp}>選択されたサイズ</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Button
                            style={{
                                backgroundColor: "#0080E4", width:
                                    "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                            }}
                            type="button"
                            disabled={!completedCrop?.width || !completedCrop?.height}
                            onClick={() =>
                                generateDownload(previewCanvasRef.current, completedCrop)
                            }
                        >
                            Faceを登録
                        </Button>
                    </div>
                </>
            ) : <></>}
            <div style={{ marginBottom: "100px" }}></div>
        </div>
    );
})
