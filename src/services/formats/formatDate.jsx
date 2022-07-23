import moment from 'moment';
import React from 'react';

export function formatDate(props) {
    return moment(props.value).format(props.format);
}