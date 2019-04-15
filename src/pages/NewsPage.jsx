import React from 'react';
import PageHeader from '../components/PageHeader';
import NewsListTimeline from '../components/NewsListTimeline';

const NewsPage = () => {
    return (
        <div>
            <PageHeader title='Latest News' />
            <NewsListTimeline />
        </div>
    );
}

export default NewsPage;
