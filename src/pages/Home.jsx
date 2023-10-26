import React from "react";
import Card from '../components/Card'
import {
    useQuery,
} from 'react-query'
import { fetchTopStories } from '../services/api';

const Home = () => {
    const { isLoading, data: stories, error } = useQuery('topStories', fetchTopStories)

    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        isLoading ? (<div className='grid'>Loading...</div>) : (
            <div className='grid'>
                {stories?.map((story, index) => (
                    <Card
                        key={index}
                        title={story.title}
                        url={story.url}
                        img={story.multimedia}
                    />
                ))}
            </div>
        ))

}

export default Home;