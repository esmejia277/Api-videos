const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    
    const moviesService = new MoviesService();

    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({
                'data': movies,
                'message': 'movies listed'
            })
        } catch (err) {
            next(err);
        }
    });

    router.get('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try {
            const movie = await moviesService.getMovie({movieId});
            res.status(200).json({
                'data': movie,
                'message': 'movie retrieved'
            })
        } catch (err) {
            next(err);
        }
    });

    router.post('/', async function(req, res, next) {
        const { body } = req;

        try {
            const movie = await moviesService.createMovie({body});
            res.status(200).json({
                'data': movie,
                'message': 'movie created'
            })
        } catch (err) {
            next(err);
        }
    });

    router.put('/:movieId', async function(req, res, next) {
        const { body } = req;
        const { movieId } = req.params;

        try {
            const movie = await moviesService.updateMovie({movieId, body});
            res.status(200).json({
                'data': movie,
                'message': 'movie updated'
            })
        } catch (err) {
            next(err);
        }
    });

    router.delete('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;

        try {
            const deletedMovie = await moviesService.deleteMovie({movieId});
            res.status(200).json({
                'data': deletedMovie,
                'message': 'movie deleted'
            })
        } catch (err) {
            next(err);
        }
    });
};


module.exports = moviesApi;