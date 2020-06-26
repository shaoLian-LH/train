import React, { Component, Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCodeBranch, faExclamationTriangle, faUser, faStar } from '@fortawesome/fontawesome-free-solid';
class GitItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name,
            stargazersCount: props.stargazersCount,
            forksCount: props.forksCount,
            openIssuesCount : props.openIssuesCount,
            htmlUrl: props.htmlUrl,
            avatar: props.avatar,
            order: props.order
        }
    }  
   
    render() { 
        const { name, stargazersCount, forksCount, openIssuesCount, htmlUrl, avatar, order } = this.state;
        const mainDivStyle = {
            position: "relative", 
            display: "inline-block",
            minWidth: "260px",
            width: "calc(25% - 60px)",
            padding: "5px 10px",
            testAlign: 'center',
            marginBottom: '45px'
        }
        const pStyle = {
            display: "inline-block",
            marginBottom: "0px",
            fontSize: "14px",
            textAlign: "left",
            color: "black",
            fontWeight: "normal"
        }
        const orderPStyle = {
            display: "block",
            marginBottom: "5px",
            fontSize: "36px",
            textAlign: "center",
            color: "black",
            fontWeight: "bold"
        }
        const firstIconStyle = {
            display: "inline-block",
            fontSize: "14px",
            color : '#FFBF6D',
            marginRight: "5px",
            width: '14px',
            height: '14px'
        }
        const secondIconStyle = {
            display: "inline-block",
            fontSize: "14px",
            color : '#FFD900',
            marginRight: "5px",
            width: '14px',
            height: '14px',
            fontWeight: 'normal'
        }
        const thirdIconStyle = {
            display: "inline-block",
            fontSize: "14px",
            color : '#7AC2F7',
            marginRight: "5px",
            width: '14px',
            height: '14px',
            fontWeight: 'normal'
        }
        const forthIconStyle = {
            display: "inline-block",
            fontSize: "14px",
            color : '#F28690',
            marginRight: "5px",
            width: '14px',
            height: '14px',
            fontWeight: 'normal'
        }
        const aStyle = {
            textDecoration: 'none',
            color: 'black'
        }
        const titlePStyle = {
            color : '#BB2B14',
            fontSize : '16px',
            fontWeight : 'bold',
            textAlign : 'center',
            display: 'block'
        }
        const groupWrapStyle = {
            position: 'realative',
            width: '100%',
            testAlign: "center",
            paddingLeft: '55px'
        }
        const groupInfoStyle = {
            position: 'relative',
            width: 'auto',
            display: 'block',
            padding: '5px 0px',
            color: 'black',
            fontSize: '12px',
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
        
        const assignO = (obj1, obj2)=>{
            let obj3 = {};
            return Object.assign(obj3, obj1, obj2);
        }

        

        const content = (
            <div style = { mainDivStyle }>
                <a style = { aStyle } href={ htmlUrl } rel="noopener noreferrer" target = "_blank">
                    <p style = { orderPStyle }>{ `#${order}` }</p>
                    <LazyLoad height={ 180 }>
                        <img style = {{ position: 'relative',height: 120, width: 120, display: "block" }} src={ avatar } alt={ avatar }/> 
                    </LazyLoad>
                    <p style = { titlePStyle } >{ name }</p>
                    <div style = { groupWrapStyle }>
                        <div style = { groupInfoStyle }>
                            <p style = { pStyle }>
                                <FontAwesomeIcon style = { firstIconStyle } icon = { faUser }/>
                            </p>
                            <p style = { assignO(pStyle, { fontWeight: 'bold' }) }>{ name }</p>
                        </div>
                        <div style = { groupInfoStyle }>
                            <p style = { pStyle } >
                                <FontAwesomeIcon style = { secondIconStyle } icon = { faStar }/>
                            </p>
                            <p style = { pStyle } >{ `${stargazersCount} starts` }</p>
                        </div>
                        <div style = { groupInfoStyle }>
                            <p style = { pStyle } >
                                <FontAwesomeIcon style = { thirdIconStyle } icon = { faCodeBranch } />
                            </p>
                            <p style = { pStyle } >{ `${forksCount} forks` }</p>
                        </div>
                        <div style = { groupInfoStyle }>
                            <p style = { pStyle } >
                                <FontAwesomeIcon style = { forthIconStyle } icon = { faExclamationTriangle } />
                            </p>
                            <p style = { pStyle } >{ `${openIssuesCount} issues` }</p>
                        </div>
                    </div>
                </a>
            </div> 
        )
        return ( 
            <Fragment>
                { 
                    (name !== undefined && name) 
                    ? content 
                    : <FontAwesomeIcon icon = { faSpinner } /> 
                }
            </Fragment>
        );
    }
}
 
export default GitItem;