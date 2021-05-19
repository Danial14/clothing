import React from 'react';
import './directory_style/directory.scss';
import MenuIteM from '../Menu-iteM/Menu-iteM.coMponent';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            MenuIteMs: [
                {
                    title: 'hats',
                    iMage: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: "hats"
                },
                {
                    title: 'jackets',
                    iMage: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ""
                },
                {
                    title: 'sneakers',
                    iMage: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ""
                },
                {
                    title: 'womens',
                    iMage: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ""
                },
                {
                    title: 'mens',
                    iMage: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ""
                }
            ]
        };
    }
    render(){
        return (
            <div className="directory-menu">
                {this.state.MenuIteMs.map(({title, iMage, id, size, linkUrl}) => (
                <MenuIteM key={id} title={title} iMage={iMage} size={size} linkUrl={linkUrl} />
            ))}
            </div>
        )
    }
}
export default Directory;