// import React from "react";
// import {Button, Col, InputNumber, Row} from "antd";
//
// class BookPriceDisplay extends React.Component{
//     constructor(props) {
//
//         super(props);
//         this.state = {
//             allPrice: 0,
//         }
//     }
//
//     componentDidMount() {
//
//
//         // let singlePriceNum = Number(this.props.singlePrice);
//         //
//         //
//         // setTimeout(() => {
//         //     this.setState({
//         //         allPrice:singlePriceNum,
//         //     });
//         // }, 0);
//
//     }
//
//     buyNumChange(e){
//         let refreshedPrice = Number(e) * Number(this.props.singlePrice);
//         this.setState({allPrice: refreshedPrice});
//     }
//
//
//     render() {
//         if(this.props.buynum>0)
//             return (
//                 <>
//                 </>
//             );
//         else
//             return (<></>);
//     }
// }
//
// export default BookPriceDisplay;