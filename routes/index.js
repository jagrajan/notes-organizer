import { Router } from 'express';

const router = Router();

router.use((req, res) => res.render('index'));

export default router;