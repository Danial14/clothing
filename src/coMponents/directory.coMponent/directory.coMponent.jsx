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
                    id: 1
                },
                {
                    title: 'jackets',
                    iMage: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    iMage: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'womens',
                    iMage: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    iMage: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }
    render(){
        return (
            <div className="directory-menu">
                {this.state.MenuIteMs.map(({title, iMage, id, size}) => (
                <MenuIteM key={id} title={title} iMage={iMage} size={size}/>
            ))}
            </div>
        )
    }
}
export default Directory;