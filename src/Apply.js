import React from 'react';
import Footer from './Footer'
import Data from './Data'


class Apply extends React.Component {

    constructor() {
        super();
        this.state = { 
            jobs: {}
        };
    }

    componentDidMount() {
        let jobId = this.props.match.params.jobId;
        let jobs = Data().find((jobs) => jobs.id === jobId);
        this.setState ({ jobs });
    }



    render() {
            return (
                <div>
                <div className = 'apply'>
                    <p>hello {this.state.jobs.id}</p>
                hello 
                </div>
                <Footer />
                </div>
                )
             
        }
}
export default Apply

// function DetailsContent({ show }) {
//     return (
//         <div className='details'>
//             <h1>{show.title}</h1>
//             <div className='content'>
//                 <div className='synopsis'>
//                    <p>{show.synopsis}</p> 
//                 </div>
//                 <div className='posters'>
//                     <img
//                         src={require(`../images/${show.id}.jpg`)}
//                         alt={show.title} />
//                 </div>
//                     <div className='link'>
//                     </div>
                
//             </div>
//         </div>
//     )
// }