import React, { useEffect, useState } from 'react';
import './Example.scss';
import RedditImageFetcher from 'reddit-image-fetcher';
import JSONTree from 'react-json-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Example = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        RedditImageFetcher.getMemes()
        .then(result => {
            setData(result);
        }).catch(err => {
            alert('Error on getting example data')
        });
    }, [])

    return (
        <div className="card example-component-wrapper shadow-dim">
            <div className="card__body">
                <div className="json-viewer__body">
                    {   data.length ?
                        <JSONTree 
                            getItemString={(type, data, itemType, itemString)  => <span>{type}</span>}
                            data={data} 
                            hideRoot={false}
                            invertTheme={false}
                            shouldExpandNode={() => true}
                            keyPath={['Result']}
                        />
                        :
                        <span className="fetching-now">Fetching <FontAwesomeIcon icon={faSpinner} spin/></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Example;