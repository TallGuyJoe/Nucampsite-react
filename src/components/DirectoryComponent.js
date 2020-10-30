import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardImgOverlay,
    CardTitle,
} from 'reactstrap';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function RenderSelectedCampsite({campsite, onClick}) {
    return (
        <Card onClick = {() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
                <CardText>{campsite.text}</CardText>
            </CardImgOverlay>
        </Card>
    )
}

function Directory(props) {
    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderSelectedCampsite campsite={campsite} />
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

	return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}



export default Directory;