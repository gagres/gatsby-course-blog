---
date: 2015-01-03 05:54:23
title: Lorem Lorem Ipsum
description: And I'm not lorem lorem ipsum
category: JS
background: "#7AAB13"
image: "/assets/img/lake.jpg"
---

# Lorem ipsum

Lorem ipsum this is a fake test of text

![Paisagem do Deserto](/assets/img/desert.jpg)

## Fusce a metus eu

This is another test of a fake text `sed` sapiem lorium

![Lake](/assets/img/lake.jpg)

## Vou testar um highlight de código
```jsx
import React from 'react';
import {
    useStaticQuery,
    graphql
} from 'gatsby';

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
                    childImageSharp {
                        fixed(width: 60, height: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed}/>
}

export default Avatar;
```