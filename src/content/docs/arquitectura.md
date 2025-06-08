---
title: Arquitectura
description: Descripción técnica de la arquitectura general del sistema.
---

# 🏗️ Arquitectura

El sistema sigue una arquitectura cliente-servidor basada en API REST. A continuación, se describe brevemente:

- **Frontend (Next.js)**: SPA con autenticación vía Firebase.
- **Backend (Spring Boot)**: expone endpoints seguros vía JWT.
- **Base de datos**: H2 en local, MySQL en despliegue.
