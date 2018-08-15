import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/login', (req, res, next) => passport
  .authenticate('local-login', (err, token, userData) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
    return res.json({
      success: true,
      message: 'Authorized',
      token,
      user: userData,
    });
  })(req, res, next));


export default router;
