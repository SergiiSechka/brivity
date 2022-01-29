import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/providers/auth';

export const Posts = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return <div>Posts</div>;
};
