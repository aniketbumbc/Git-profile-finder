import React, { useEffect, Fragment, useContext } from 'react';
import Repos from '../Repos/Repos';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    avatar_url,
    bio,
    name,
    login,
    company,
    followers,
    following,
    location,
    html_url,
    blog,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable:{''}
      {hireable ? (
        <i className='fas fa-check text-sucess' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div className=''>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit GitHub
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>UserName:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Follwers:{followers}</div>
        <div className='badge badge-success'>Follwing:{following}</div>
        <div className='badge badge-light'>Public Repos:{public_repos}</div>
        <div className='badge badge-dark'>Public Gist:{public_gists}</div>
      </div>
      <Repos repos={githubContext.repos} />
    </Fragment>
  );
};
export default User;
