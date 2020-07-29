import React from 'react';
import '../css/ProductDetails.css'
import Grid from '@material-ui/core/Grid/Grid';

const SingleDetail = (props: {title: string, data: string}) => {
    return (
        <Grid container className='ProductDetailsGrid' spacing={0}>
            <Grid className="ProductDetailsItem" item xs={3}>
                {props.title}
            </Grid>
            <Grid className="ProductDetailsItem" item xs={9}>
                {props.data}
            </Grid>
        </Grid>
    );
}

export default SingleDetail;