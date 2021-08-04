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

export const useCreatePantsComment = () => {
    const [pantsComment, setPantsComment] = useState(null);
    const classes = useStyles();


    const CreatePantsComment = (props) => {

        // console.log(props);

        if(props == "000"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段よりも小さく、丈も普段より短いようです。全体的にサイズが小さいかもしれませんので、ワンサイズ大きくするか別のアイテムにを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "001"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段よりも小さく、丈も普段より短いようです。全体的にサイズが小さいかもしれませんので、ワンサイズ大きくするか別のアイテムにを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "002"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段よりも小さく、丈も普段より短いようです。全体的にサイズが小さいかもしれませんので、ワンサイズ大きくするか別のアイテムにを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "010"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のサイズよりウエストが小さめで、股付近はゆとりがあるようです。股周りに多少ゆとりが欲しい場合はこのアイテムのままワンサイズ上げてみてはいかがでしょう。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "011"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツよりもウエストが細いようです。若干きつい着用感になるかもしれないのでワンサイズ大きくしてみてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "012"){
            const data = (
                <>
                    <p className={classes.p}>ウエストも普段のサイズより小さく、股も浅い作りのようです。全体的に小さめなのでワンサイズ上げてみてはいかがでしょう。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "020"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段よりも小さく、履き心地は股周りに余裕がありそうですが丈が若干長いようです。ウエストの細さが気にならなければワンサイズ小さくしてみてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "021"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段よりも大きく、丈も普段より長いようです。普段のアイテムよりも少々タイトなパンツかもしれないので、別のものを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "022"){
            const data = (
                <>
                    <p className={classes.p}>ウエストと股まわりが普段の着用アイテムよりきゅうくつかもしれません。タイトな履き心地を好まれない場合は違うアイテムを選ばれるのがいいかもしれません。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "100"){
            const data = (
                <>
                    <p className={classes.p}>ウエストの大きさは普段のものとあまり変わらないですが、丈が全体的に短めです。丈の長さが気になる場合はワンサイズ大きくするか、もう少し丈の長いアイテムを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "101"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツとフィット感はほぼ一緒ですが、丈が若干短いようです。丈の短さが気になる場合はワンサイズ上げるか、他のアイテムを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "102"){
            const data = (
                <>
                    <p className={classes.p}>ウエストの大きさは普段のものとあまり変わらないですが、丈が短く履き心地が少々浅いかもしれません。深く履けないとお腹が出たりしてしまう可能性もあるので、ワンサイズ上げるか別のアイテムをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "110"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツとウエストはほぼ一緒ですが、股の上が大きくで履きくゆとりがあります。ちゃんとフィットして着用したい場合は股付近が少々ゆとりがあるのでワンサイズ小さくするか、別のアイテムをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "111"){
            const data = (
                <>
                    <p className={classes.p}>現在着用中のパンツは普段着用のサイズとほぼ同じサイズ感のようです。ウエストや丈に関しては問題なく着用できるサイズでしょう。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "112"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツとウエストはほぼ一緒ですが、股の上が短めで履き心地も浅いかもしれません。パンツの位置が普段より低くなりお腹が出たりしてしまう可能性もあるので、ワンサイズ上げるか別のアイテムをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "120"){
            const data = (
                <>
                    <p className={classes.p}>ウエストは普段のものとほぼ変わりませんが、丈が長く股上も長めで全体的に普段のサイズより大きめかもしれません。ゆとりがあるのが気になる場合はワンサイズ小さくするか、他のウェアを選ばれてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "121"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツとフィット感はあまり変わらないようですが、丈が若干長いようです。丈の長さが気になる場合はワンサイズ下げるか、他のアイテムを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "122"){
            const data = (
                <>
                    <p className={classes.p}>ウエストは普段のものとあまり変わらないですが、丈が全体的に長いようです。丈の長さが気になる場合はワンサイズ小さくするか、もう少し丈の短いアイテムを選んでみてはいかがでしょう。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "200"){
            const data = (
                <>
                    <p className={classes.p}>普段のウエストよりも大きく股周りも大きい可能性がありますが、丈は短めです。ゆったりめな履き心地を好まれない場合は違うアイテムを選ばれることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "201"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段よりも大きく、丈が普段より短いようです。丈が短いウェアをお探しの場合は同じアイテムのままワンサイズ小さくしてウエストを合わせるといいでしょう。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "202"){
            const data = (
                <>
                    <p className={classes.p}>ウエストが普段より大きいですが、履き心地が浅くお腹周りが出てしまう可能性があります。別のアイテムを選んでみてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "210"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりもウエストが大きく、股周りにゆとりがある作りのようです。ゆるい履き心地があまりお好きでない場合はワンサイズ小さくされることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "211"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツよりもウエストが大きいようです。非常にゆったりした着心地になる可能性があるのでワンサイズ小さくしてみてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "212"){
            const data = (
                <>
                    <p className={classes.p}>普段のサイズよりもウエストが大きく、履き心地が浅い可能性があります。股の作りが浅いアイテムをご希望であればウエストを合わせるためにワンサイズ小さくすることをオススメします。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "220"){
            const data = (
                <>
                    <p className={classes.p}>ウエスト、丈、股まわりが全体的に大きめです。ワンサイズ小さくしてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "221"){
            const data = (
                <>
                    <p className={classes.p}>普段着用のパンツよりもウエストが大きく丈が長いようです。普段よりゆるい着心地になる可能性があるのでワンサイズ下げてみてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }

        if(props == "222"){
            const data = (
                <>
                    <p className={classes.p}>全てのサイズが大きめです。ワンサイズ下げてみてはいかがでしょうか。</p>
                </>
            )
            setPantsComment(data);
        }


    }
    return { CreatePantsComment,  pantsComment }

}