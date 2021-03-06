import React, { Component } from 'react';

import './PostList.css';

import Post from './Post';
import Comment from './Comment';

import img1 from '../../assets/imgs/img1.svg';
import img2 from '../../assets/imgs/img2.svg';
import img3 from '../../assets/imgs/img3.svg';
import img4 from '../../assets/imgs/img4.svg';
import img5 from '../../assets/imgs/img5.svg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: img1,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: img2,
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: img3,
        },
        date: '04 Jun 2019',
        content: `Fala galera, beleza?
        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: img4,
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: img5,
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Post post={post} />
              <hr />
              {post.comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
