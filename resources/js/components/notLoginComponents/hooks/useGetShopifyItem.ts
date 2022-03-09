import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";

type Props = {
    shopifyId: any;
}

export const useGetShopifyItem = () => {
    const [shopifyItem, setShopifyItem] = useState<any>();
    const [loading, setLoading] = useState<Boolean>(false);


    const getShopifyItem = useCallback((shopifyId: Props) => {
        setLoading(true);
        const btoaId = btoa(`gid://shopify/Product/${shopifyId}`);

        const query = `{
  node(id: "${btoaId}") {
    id
    ... on Product {
                media(first: 10) {
        edges {
          node {
            mediaContentType
            alt
            ...mediaFieldsByType
          }
        }
      }
                    title
                    id
                    title
                    description
                    descriptionHtml
                    onlineStoreUrl
                    createdAt
                    totalInventory
                    availableForSale
                    handle
                    vendor
                    images(first: 5) {
                    edges {
                      node {
                     id
                           altText
                           originalSrc
                               }
                              }
                               }
                    variants(first: 5) {
                     edges {
                         node {
                          price
                             id
                                      }
                                  }
                              }
    }
  }
}

fragment mediaFieldsByType on Media {
  ...on Model3d {
    sources {
      url
      mimeType
      format
      filesize
    }
  }
}
`;

        apiCall(query).then(response => {
            setShopifyItem(response.data.node);
        }).finally(() => {
            setLoading(false);
        });

    }, []);

    function apiCall(query) {
        return fetch('https://wearcoord.myshopify.com/api/2020-10/graphql.json', {   //[shop-name]にurlのショップ名を入力
            method: 'POST',
            headers: {
                'Content-Type': 'application/graphql',
                'X-Shopify-Storefront-Access-Token': "118cc9ac9543b7acebdb47fee07d8e9e"   //Storefront APIのアクセストークンを入力
            },
            "body": query
        }).then(response => response.json());
    }

    return { getShopifyItem, shopifyItem, loading };
}