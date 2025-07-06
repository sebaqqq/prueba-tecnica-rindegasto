# Prueba Rindegastos

API REST completa desarrollada con NestJS que incluye funcionalidades de conversión de monedas, gestión de cumpleaños y operaciones numéricas.

## 🚀 Características

- **Conversión de Monedas**: Integración con PrimeAPI para conversiones en tiempo real
- **Gestión de Cumpleaños**: Endpoints para manejar fechas de cumpleaños
- **Operaciones Numéricas**: Funcionalidades matemáticas básicas

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm
- API key de PrimeAPI (para conversiones de moneda)

## 🛠️ Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd prueba-rindegastos
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto:

## 🏃‍♂️ Ejecución

```bash
npm run start:dev
```

La aplicación estará disponible en: `http://localhost:3001`

## 📚 Endpoints de la API

### 1. Conversión de Monedas

**GET** `/conversion`

Convierte una cantidad de una moneda a otra usando tasas de cambio en tiempo real.

**Parámetros de consulta:**

- `from` (string, requerido): Moneda de origen (ej: USD, EUR, CLP, MXN)
- `to` (string, requerido): Moneda de destino (ej: USD, EUR, CLP, MXN)
- `amount` (number, requerido): Cantidad a convertir

**Ejemplo de petición:**

```bash
"http://localhost:3001/conversion?from=USD&to=CLP&amount=100"
```

**Respuesta exitosa:**

```json
{
  "result": 95000,
  "rate": 950,
  "from": "USD",
  "to": "CLP",
  "amount": 100
}
```

**Códigos de error:**

- `400`: Parámetros inválidos o faltantes
- `401`: API key inválida
- `404`: Moneda no encontrada
- `500`: Error interno del servidor

### 2. Gestión de Cumpleaños

**GET** `/birthdays`

Obtiene información sobre cumpleaños.

**Ejemplo:**

```bash
"http://localhost:3001/birthday/getDaysUntilMyBirthday?name=Sebastian&birthdate=2002-07-22"
```

```bash
"http://localhost:3001/birthday/getRindegastinosBirthdays"
```

### 3. Operaciones Numéricas

**GET** `/numbers`

Realiza operaciones matemáticas.

**Ejemplo:**

```bash
"http://localhost:3001/numbers/getTheNumber?first=4&second=3"
```

## 🏗️ Estructura del Proyecto

```
src/
├── main.ts                 # Punto de entrada de la aplicación
├── app.module.ts          # Módulo principal
├── conversion/            # Módulo de conversión de monedas
│   ├── conversion.controller.ts
│   ├── conversion.service.ts
│   └── conversion.module.ts
├── birthdays/             # Módulo de cumpleaños
│   ├── birthdays.controller.ts
│   └── birthdays.service.ts
|   └── birthdays.module.ts
└── numbers/               # Módulo de operaciones numéricas
    ├── numbers.controller.ts
    └── numbers.service.ts
    └── numbers.module.ts
```

## 🔧 Configuración

### Variables de Entorno

| Variable       | Descripción               | Valor por defecto        |
| -------------- | ------------------------- | ------------------------ |
| `PORT`         | Puerto del servidor       | `3001`                   |
| `PRIMEAPI_KEY` | API key para conversiones | 7d05aeb5245511fb48fd2120 |
