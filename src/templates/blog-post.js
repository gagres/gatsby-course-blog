import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from '../components/RecommendedPosts'
import Comments from '../components/Comments'

import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) => {
    const {
        markdownRemark: {
            frontmatter: {
                title,
                description,
                date
            },
            fields: { slug },
            html,
            timeToRead
        }
    } = data;

    const { previousPost, nextPost } = pageContext;

    return (
        <Layout>
            <SEO title={title}/>
            <S.PostHeader>
                <S.PostDate>{date} - {timeToRead} min de leitura</S.PostDate>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostDescription>{description}</S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </S.MainContent>
            <RecommendedPosts
                next={nextPost}
                previous={previousPost}/>
            <Comments url={slug} title={title}/>
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            fields {
                slug
            }
            html
            timeToRead
        }
    }  
`

export default BlogPost