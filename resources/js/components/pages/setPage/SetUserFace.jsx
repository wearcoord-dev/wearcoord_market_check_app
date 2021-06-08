import { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useCreateUserFace } from "../../../hooks/user/useCreateUserFace";
import { UserContext } from "../../providers/UserProvider";

// export const SetUserFace = memo(() => {
//     return (
//         <>
//         <p>setuserfaceです</p>
//         </>
//     )
// })



export const SetUserFace = memo(() => {
    const { CreateUserFace } = useCreateUserFace();
    const context = useContext(UserContext);

    console.log(context.contextName);

    const [upImg, setUpImg] = useState();
    const [trimmedSrc, setTrimmedSrc] = useState(null);

    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1.15 });
    const [completedCrop, setCompletedCrop] = useState(null);

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

    return (
        <div className="App">
            {context.contextName ? (
                <p style={{ width: "200px", margin: "auto" }}>
                    <img style={{ width: "100%", borderRadius: "50%" }} src={context.contextName.faceImg} alt="" />
                </p>
            ) : <p>画像がありません</p>}
            <div>
                <input type="file" accept="image/*" onChange={onSelectFile} />
            </div>
            <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                style={{ width: "300px", display: "flex", margin: "auto" }}
            />
            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                <canvas
                    ref={previewCanvasRef}
                    // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                    style={{
                        width: Math.round(completedCrop?.width ?? 0),
                        height: Math.round(completedCrop?.height ?? 0),
                        borderRadius: "50%"
                    }}
                />
            </div>
            <div style={{ textAlign: "center" }}>
                <button
                    style={{ backgroundColor: "#484848", color: "white", padding: "10px 50px", display: "inline-block", borderRadius: "10px", fontSize: "20px" }}
                    type="button"
                    disabled={!completedCrop?.width || !completedCrop?.height}
                    onClick={() =>
                        generateDownload(previewCanvasRef.current, completedCrop)
                    }
                >
                    Faceを登録
        </button>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </div>
    );
})
