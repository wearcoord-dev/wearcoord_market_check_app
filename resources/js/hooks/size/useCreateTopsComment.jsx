import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    p: {
        fontSize: "16px",
        width: "90%",
        margin: "auto",
        lineHeight: "1.4",
        padding: "20px 0",
    },
});

export const useCreateTopsComment = () => {
    const [topsComment, setTopsComment] = useState(null);
    const classes = useStyles();


    const CreateTopsComment = (props) => {

        // console.log(props);

        if(props == "000"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周り、幅や丈が全体的に小さいようです。ワンサイズ上げてみてはいかがでしょうか。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "001"){
            const data = (
                <>
                    <p className={classes.p}>普段のウェアより丈が短く、また肩・胸周りが少々きつい可能性があります。テニスで腕まわりを動かすのに窮屈かもしれないのでワンサイズ大きいものを着用された方がいいかもしれません。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "002"){
            const data = (
                <>
                    <p className={classes.p}>肩周りのゆとりや丈などが全体的に小さくきゅうくつかもしれません。ワンサイズ大きくされることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "010"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周り、幅が少々きつそうです。タイトな着方をしたくない人はサイズを変えるか、別のアイテムを選ばれるといいかもしれません。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "011"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズより肩、胸周りが少々きつい可能性があります。テニスで腕まわりを動かすのに窮屈かもしれないので普段よりワンサイズ大きいものを着用されることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "012"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズより肩、胸周りが少々きつい可能性があります。テニスで腕まわりを動かすのに窮屈かもしれないので普段よりワンサイズ大きいものを着用されることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "020"){
            const data = (
                <>
                    <p className={classes.p}>丈が普段のものより若干長めですが、胸囲や体の幅は小さめで細い作りのようです。あまり体の線が細くない場合はワンサイズ大きくするか、別のウェアを選ばれることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "021"){
            const data = (
                <>
                    <p className={classes.p}>丈は普段のものより長いですが、肩・胸周りが少々きつい可能性があります。テニスで腕まわりを動かすのに窮屈かもしれないのでワンサイズ大きいものを着用されることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "022"){
            const data = (
                <>
                    <p className={classes.p}>丈とお腹周りがゆったりして大きいようです。胸囲が普段のものよりきゅうくつかもしれないので気になる場合は別のアイテムをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "100"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のウェアよりも幅がやや小さく丈が長めです。痩せ型の方や肩幅が狭い方で身長がそこまで大きくない(胴が短い)方にはオススメです。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "101"){
            const data = (
                <>
                    <p className={classes.p}>丈が普段よりもやや短めです。気になる方はワンサイズ大きいものか、丈の長さが普段と同じくらいのウェアを選ぶことをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "102"){
            const data = (
                <>
                    <p className={classes.p}>横幅が通常よりも大きく、丈少々短いようです。少し横幅が大きい体型であればちょうど良いかもしれませんが、丈が短いため身長や胴が長い方は少し短く感じてしまうかもしれません。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "110"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のウェアよりも幅がやや小さめです。痩せ型の方や肩幅が狭い方へはオススメです。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "111"){
            const data = (
                <>
                    <p className={classes.p}>現在着用中のウェアは大体普段のサイズとちょうどいいです！このウェアを着れば普段と同じような快適さで動きを制限されたりせずに済むでしょう。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "112"){
            const data = (
                <>
                    <p className={classes.p}>横幅だけ通常よりも大きい可能性があります。少し横幅が大きい体型であればちょうど良いかもしれませんが、痩せ型や肩が狭い方はワンサイズ小さいものをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "120"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のウェアよりも幅がやや小さく丈が長めです。痩せ型の方や肩幅が狭い方で身長が高い（胴が長い）方にはオススメです。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "121"){
            const data = (
                <>
                    <p className={classes.p}>このアイテムは普段着用のアイテムより丈がやや長いです。丈の長すぎるウェアがお好きでない場合はワンサイズ小さくするか、別のアイテムをお選びいただく方がいいかもしれません。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "122"){
            const data = (
                <>
                    <p className={classes.p}>横幅が通常よりも大きく、丈も少々長いようです。少し横幅が大きい体型であればちょうど良いかもしれませんが、痩せ型や肩が狭い方はワンサイズ小さいものをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "200"){
            const data = (
                <>
                    <p className={classes.p}>胸囲が普段のものより若干大きめですがお腹周りは細く、丈が短いようです。体の幅のきゅうくつさが気になる方は別のアイテムを選ばれることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "201"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周りがゆったりしていますが丈は普段より少々短めです。丈が短いウェアがお好きでない場合は別のウェアをお選びいただいた方がいいかもしれません。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "202"){
            const data = (
                <>
                    <p className={classes.p}>丈が短く、幅が普段より非常に大きい可能性があります。横幅にある程度ゆとりを持ちたい場合はこのままでもいいかもしれませんが、フィットする方が良いという方はワンサイズ下げることをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "210"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周り、幅に余裕がありますが、お腹周りは少々きつそうです。タイトな着方をしたくない人はサイズを変えるか、別のアイテムを選ばれるといいかもしれません。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "211"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周りに余裕がありそうです。ゆったり着るのがお好きな方はこのサイズがいいかもしれませんが、かなりゆったりしたサイズの可能性があります。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "212"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周り、幅に余裕がありそうです。ゆったり着るのがお好きな方はこのサイズがいいかもしれませんが、かなりゆったりしたサイズの可能性があります。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "220"){
            const data = (
                <>
                    <p className={classes.p}>肩まわりが普段よりも非常にゆったりしており、丈も長いようです。体の幅が若干きゅうくつなのでそれが気になる方は別のアイテムを選ぶことをオススメします。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "221"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周りがゆったりし、丈も普段より長めです。ゆったり着るのがお好きな方はこのサイズがいいかもしれませんが、かなりゆったりしたサイズの可能性があります。</p>
                </>
            )
            setTopsComment(data);
        }

        if(props == "222"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりも肩、胸周り、幅や丈が全体的に大きいようです。ワンサイズ下げてみてはいかがでしょうか。</p>
                </>
            )
            setTopsComment(data);
        }


    }
    return { CreateTopsComment,  topsComment }

}