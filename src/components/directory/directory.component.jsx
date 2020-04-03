import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'sapkák',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                }
                ,{
                    title: 'kabátok',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                }
                ,{
                    title: 'tornacipők',
                    imageUrl: 'https://i.ibb.co/0jpHhnp/sneakers.png',
                    id: 3
                }
                ,{
                    title: 'hölgyek',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4
                }
                ,{
                    title: 'férfiak',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id }) => (
                        <MenuItem key={id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;