import axios from 'axios';

const router=axios.create({
    baseURL:'https://api.themoviedb.org/3'
});

export default router;