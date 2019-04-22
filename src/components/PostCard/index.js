import React from 'react'
import {Link} from 'gatsby'

const PostCard = ({posts}) => {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-10'>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article-page')
            .map(({node: post}) => (
              <div
                className='content'
                key={post.id}
              >
                <div className='columns'>
                  <div className='column is-4'>
                    <img src={post.frontmatter.cover} />
                  </div>
                  <div className='column'>
                    <p>
                      <Link className='has-text-primary' to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className='button is-small' to={post.fields.slug}>
                                        Keep Reading <span className='arrow'> →</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PostCard
