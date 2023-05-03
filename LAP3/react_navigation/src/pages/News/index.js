import React from 'react';
import { Greeting, ReaderCount, Headlines, FeaturedArticle } from '../../components';
import { Switch, Route, useHistory } from 'react-router-dom';

const News = () => {
  const history = useHistory();

  const loadFeaturedStory = id => history.push(`/news/${id}`)

  return(
    <div className="news-reader">
      <h1>A Real State of Events</h1>

      <aside>
        <Greeting />

        <ReaderCount />
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>

      </aside>

      <section>
        <Switch>
            <Route exact path={"/news"}>
              <Headlines handleSelect={loadFeaturedStory}/>
            </Route>
            
            {/* Dynamic route params */}
            <Route path={"/news/:id"}>
              <FeaturedArticle />
            </Route>
        </Switch>
      </section>

    </div>
  );

};

export default News;