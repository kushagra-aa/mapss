# Project Documentation

## Overview

This document details the steps taken, challenges faced, and technology stack used to complete the project.

## Technology Stack

- **Frontend:** Next.js, ReactJS, TypeScript

## Challenges Faced

- OpenLayer Integration:

  - Implementing OpenLayer with ReactJS was a real struggle as their is no "Official" way to do it.
  - After selecting '@react-ol/fiber': A new problem came up, Having layers and adding drawing controls.
  - Finally Settled on Leaflet.

- Leaflet Integration:
  - Used 'react-leaflet'.
  - It does have a drawing controls option.

## Decisions Made

After evaluating both OpenLayer and Leaflet, I opted for Leaflet due to its smoother integration with ReactJS and readily available drawing controls within the 'react-leaflet' library. However, this decision meant developing the custom drawing logic from scratch.

## Conclusion

Sorry, due to unforeseen circumstances, I can not complete the entire project within the allotted timeframe.
