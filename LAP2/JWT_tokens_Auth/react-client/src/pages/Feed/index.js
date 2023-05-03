import React, { Component } from 'react';
import { Post } from '../../components';

class Feed extends Component {
    state = { posts: [] }

    componentDidMount = () => this.fetchPosts();

    fetchPosts = async () => {
        try {
            const options = {
                headers: new Headers({'Authorization': localStorage.getItem('token')}),
            }
            const response = await fetch('http://localhost:3000/posts', options);
            const data = await response.json();
            if(data.err){
                console.warn(data.err);
                this.props.logout();
            } else {
                this.setState({ posts: data })
            }
        } catch (err) {
            console.warn(err);
        }
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
