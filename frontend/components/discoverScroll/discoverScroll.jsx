import React from 'react';

class DiscoverScroll extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <h3 className='discover-heading'>Discover Great Gear</h3>
                <ul className='discover'>
                    <li className='tile'>tile 1</li>
                    <li className='tile'>tile 2</li>
                    <li className='tile'>tile 3</li>
                    <li className='tile'>tile 4</li>
                    <li className='tile'>tile 5</li>
                    <li className='tile'>tile 6</li>
                    <li className='tile'>tile 8</li>
                    <li className='tile'>tile 9</li>
                    <li className='tile'>tile 10</li>
                    <li className='tile'>tile 11</li>
                    <li className='tile'>tile 12</li>
                    <li className='tile'>tile 13</li>
                </ul>
            </section>
        );
    }
}

export default DiscoverScroll;
