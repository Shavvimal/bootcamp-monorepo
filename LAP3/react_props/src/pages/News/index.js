import React, { useState } from 'react';
import { Greeting, ReaderCount, Headlines, FeaturedArticle } from '../../components';

const News = () => {

  const [ stories, setStories ] = useState([
    { id: 2503, headline: 'Disaster Strikes', snippet: 'It was a dark and stormy night...'},
    { id: 1322, headline: 'Sunny Days Ahead', snippet: 'Even in the UK, beach days are still upon us.'},
    { id: 5541, headline: 'Beware the Frumious Bandersnatch', snippet: 'Twas brillig, and the slithy toves did gyre and gimble in the wabe.'}
  ])
  const [ chosenStory, setChosenStory ] = useState();

  const handleStorySelect = storyId => {
    const chosenStory = stories.find(st => st.id === storyId);
    setChosenStory(chosenStory);
  };

  return(
    <div className="news-reader">
      <h1>A Real State of Events</h1>

      <aside>
        <Greeting />

        <ReaderCount />
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>
      </aside>

      <section>
        <Headlines stories={stories} handleSelect={handleStorySelect}/>

        { chosenStory && <FeaturedArticle story={chosenStory} /> }
      </section>

    </div>
  );

};

export default News;
