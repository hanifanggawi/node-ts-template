import { Request, Response, NextFunction } from 'express'

export function requestLogger(req: Request, res: Response, next : NextFunction) {
  const requestInfo = `HTTP ${req.method} "${req.url}"`
  res.on('finish', () => {
    const responseInfo = `${res.statusCode} ${res.statusMessage}`
    console.log(requestInfo, responseInfo)
  })
  next()
}