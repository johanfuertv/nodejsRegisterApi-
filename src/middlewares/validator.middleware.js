

    export const validateSchema = (schema) => {
        return (req, res, next) => {
            try {
                // Aquí deberías pasar req.body (o el objeto que desees validar) a la función parse
                schema.parse(req.body);
                next();
            } catch (error) {
                return res.status(400).json({ error });
            }
        };
    };