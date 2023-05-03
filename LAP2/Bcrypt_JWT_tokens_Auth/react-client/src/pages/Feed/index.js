import React, { Component } from 'react';
import { Post } from '../../components';

class Feed extends Component {
    state = { posts: [] }

    componentDidMount = () => this.fetchPosts();

    fetchPosts = async () => {
        const resp = await fetch(`http://localhost:3000/posts`);
        const posts = await resp.json()
        this.setState({ posts })
    }
    
    render(){
        const renderPosts = this.state.posts.map((p, idx) => <Post key={idx} post={p} />)
        
        return (
            <section id="feed">
                { renderPosts }
            </section>
        );
    }
}

export default Feed;
