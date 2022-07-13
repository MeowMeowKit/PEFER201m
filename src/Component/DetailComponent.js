import React from "react";
import {
   Card,
   CardBody,
   CardImg,
   CardSubtitle,
   CardText,
   CardTitle,
} from "reactstrap";

const DetailComponent = (props) => {
   const renderDetail = (item) => {
      return (
         <div className="col-12 col-md-4 mb-3 mt-5">
            <Card className="border-0">
               <CardImg top src={item.image} alt={item.name} />
               <CardBody>
                  <CardSubtitle className="text-secondary">
                     {item.category}
                  </CardSubtitle>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>{item.price}</CardText>
               </CardBody>
            </Card>
         </div>
      );
   };
   return <React.Fragment>{renderDetail(props.component)}</React.Fragment>;
};

export default DetailComponent;
