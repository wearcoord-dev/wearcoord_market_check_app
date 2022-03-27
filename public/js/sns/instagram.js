$(function () {
    let list = '';
    const limit = 6; //表示件数
    const accessToken = 'EAAJQZCwEghRwBABMZCvqox4P6Gn1MWERatktkD32AYhph07qcVSlezGslkJbPVJK2PRl8a2XNKwQCorlgZAEmK7LaZBLmYKL64HVHdJF90I3sDCXnC67I2qZA5S9CpUdR1Pcp90M4W86bfVTycxp3LCacP0uI0BEYrpQVPTtZAuqBZCSR2AEavt'; // アクセストークン
    const businessID = '17841445476821527'; //instagram_business_accountのID
    const url = `https://graph.facebook.com/v10.0/${businessID}?fields=name,media.limit(${limit}){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`;
    $.ajax({
        url: url
    }).done((res) => {
        const data = res.media;
        $.each(data, function (index, val) {
            $.each(val, function (i, item) {
                console.log(item);
                if (item.media_url) {
                    //メディアのタイプがビデオの場合、サムネを取得
                    media = (item.media_type == 'VIDEO' ? item.thumbnail_url : item.media_url);

                    // 一覧を変数listに格納
                    list +=
                        `<li><a href="${item.permalink}" target="_blank" rel="noopener"><figure><img class="" src="${media}" alt=""></figure><div><span class="material-icons-outlined">favorite_border</span><p>${item.like_count}</p></div></a></li>`;
                }

            })
        });
        $('#insta').html(`${list}`);
    }).fail(function (jqXHR, status) {
        $('#insta').html('<p>読み込みに失敗しました。</p>');
    });
});