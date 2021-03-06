const path = require('path')

const modelPath = path.resolve(__dirname, 'models')

module.exports = {
  faceLandmarks5Model: path.resolve(modelPath, 'shape_predictor_5_face_landmarks.dat'),
  faceLandmarks68Model: path.resolve(modelPath, 'shape_predictor_68_face_landmarks.dat'),
  faceDetectionModel: path.resolve(modelPath, 'mmod_human_face_detector.dat'),
  faceRecognitionModel: path.resolve(modelPath, 'dlib_face_recognition_resnet_model_v1.dat')
}