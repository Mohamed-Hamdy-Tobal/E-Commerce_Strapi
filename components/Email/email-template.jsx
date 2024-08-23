import * as React from 'react';
import { CustomEmail } from './CustomEmail';

// The Template Only Return HTML , if i want to add dynamic data, pass it by params
export const EmailTemplate = ({user}) => (
    <div>
        <CustomEmail user={user}/>
    </div>
)