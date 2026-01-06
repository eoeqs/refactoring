# VetCare - Архитектурная документация

## Обзор системы

VetCare - это система управления ветеринарной клиникой, предоставляющая функциональность для записи на прием, управления питомцами, ведения медицинских карт, карантина и других операций ветеринарной клиники.

## Пользователи системы

### 1. Владелец питомца (ROLE_OWNER)
- Регистрация и управление своими питомцами
- Запись на прием к ветеринару
- Просмотр истории болезни питомца
- Просмотр назначений и рекомендаций
- Оставление отзывов о ветеринарах

### 2. Ветеринар (ROLE_VET)
- Просмотр записей на прием
- Создание анамнезов
- Постановка диагнозов
- Назначение лечения
- Создание медицинских процедур
- Управление обновлениями состояния здоровья
- Размещение питомцев в секторах

### 3. Администратор (ROLE_ADMIN)
- Управление пользователями
- Управление клиниками и секторами
- Управление карантином
- Полный доступ ко всем функциям системы

## Архитектура системы

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (React)                       │
│  - MainPage, PetProfile, UserDashboard, VetDashboard        │
│  - Компоненты: VetCarousel, VetCard, AppointmentModal       │
│  - Компоненты: AnamnesisTable, HealthUpdatesTable           │
└───────────────────────┬─────────────────────────────────────┘
                        │ HTTP/REST
                        │ JWT Authentication
┌───────────────────────▼─────────────────────────────────────┐
│                  Backend (Spring Boot)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Controllers Layer                       │   │
│  │  - UserController, PetsController                    │   │
│  │  - AppointmentsController, AnamnesisController       │   │
│  │  - HealthUpdateController, TreatmentController       │   │
│  │  - MedicalProcedureController, DiagnosisController   │   │
│  │  - QuarantineController, SectorsController           │   │
│  └───────────────────┬──────────────────────────────────┘   │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐   │
│  │              Services Layer                          │   │
│  │  - UserService, PetsService                          │   │
│  │  - AppointmentsService, AnamnesisService             │   │
│  │  - HealthUpdatesService, TreatmentService            │   │
│  │  - MedicalProcedureService, DiagnosisService         │   │
│  │  - QuarantineService, SectorsService                 │   │
│  └───────────────────┬──────────────────────────────────┘   │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐   │
│  │              Repositories Layer                      │   │
│  │  - JPA Repositories для всех сущностей               │   │
│  └───────────────────┬──────────────────────────────────┘   │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐   │
│  │              Models/Entities                         │   │
│  │  - AppUser, Pet, Appointment, Anamnesis              │   │
│  │  - HealthUpdate, Treatment, MedicalProcedure         │   │
│  │  - Diagnosis, Quarantine, Sector, Clinic             │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Security & JWT                          │   │
│  │  - JwtService, JwtAuthenticationFilter               │   │
│  │  - SecurityConfig, UserDetailsServiceImpl            │   │
│  └──────────────────────────────────────────────────────┘   │
└───────────────────────┬─────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
┌───────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
│  PostgreSQL  │ │   MinIO    │ │  WebSocket  │
│  Database    │ │  Storage   │ │  (Real-time)│
└──────────────┘ └─────────────┘ └─────────────┘
```

## Основные модули

### 1. Модуль аутентификации и авторизации
- **Контроллер**: `UserController`
- **Сервисы**: `AuthenticationService`, `UserService`
- **Функции**:
  - Регистрация пользователей
  - Аутентификация (JWT)
  - Управление ролями
  - Управление профилями пользователей

### 2. Модуль управления питомцами
- **Контроллер**: `PetsController`
- **Сервис**: `PetsService`
- **Функции**:
  - Создание и обновление питомцев
  - Привязка питомцев к ветеринарам
  - Размещение питомцев в секторах
  - Управление фотографиями питомцев

### 3. Модуль записей на прием
- **Контроллер**: `AppointmentsController`
- **Сервис**: `AppointmentsService`
- **Функции**:
  - Создание записей на прием
  - Просмотр записей
  - Управление приоритетными записями
  - Получение записей по ветеринару

### 4. Модуль медицинских данных
- **Контроллеры**: 
  - `AnamnesisController` - анамнезы
  - `HealthUpdateController` - обновления состояния здоровья
  - `DiagnosisController` - диагнозы
  - `TreatmentController` - лечение
  - `MedicalProcedureController` - медицинские процедуры
- **Функции**:
  - Создание и ведение анамнезов
  - Отслеживание динамики состояния здоровья
  - Постановка диагнозов
  - Назначение лечения
  - Регистрация медицинских процедур

### 5. Модуль карантина
- **Контроллер**: `QuarantineController`
- **Сервис**: `QuarantineService`
- **Функции**:
  - Размещение питомцев в карантин
  - Управление статусами карантина
  - Отслеживание сроков карантина

### 6. Модуль управления секторами
- **Контроллер**: `SectorsController`
- **Сервис**: `SectorsService`
- **Функции**:
  - Управление секторами клиники
  - Отслеживание занятости секторов
  - Фильтрация по категориям (опасные, заразные)

### 7. Модуль рейтингов и отзывов
- **Контроллер**: `RatingAndReviewsController`
- **Сервис**: `RatingAndReviewsService`
- **Функции**:
  - Оставление отзывов о ветеринарах
  - Просмотр рейтингов
  - Управление отзывами

### 8. Модуль уведомлений
- **Контроллер**: `NotificationController`
- **Сервис**: `NotificationService`
- **Функции**:
  - Отправка уведомлений пользователям
  - Просмотр уведомлений
  - WebSocket для real-time уведомлений

## Технологический стек

### Backend
- **Framework**: Spring Boot 3.4.2
- **Language**: Java 17
- **Database**: PostgreSQL
- **ORM**: Spring Data JPA / Hibernate
- **Security**: Spring Security + JWT
- **Documentation**: SpringDoc OpenAPI (Swagger)
- **File Storage**: MinIO
- **Real-time**: WebSocket
- **Build Tool**: Gradle

### Frontend
- **Framework**: React
- **Routing**: React Router
- **HTTP Client**: Axios
- **UI Components**: Custom components
- **State Management**: React Hooks

## API Документация

API документация доступна через Swagger UI после запуска приложения:
- **Swagger UI**: http://localhost:8080/swagger-ui/index.html или http://localhost:8080/swagger-ui.html
- **OpenAPI JSON**: http://localhost:8080/v3/api-docs
- **OpenAPI YAML**: http://localhost:8080/v3/api-docs.yaml

**Примечание**: Доступ к Swagger UI открыт без аутентификации.

## Безопасность

- JWT токены для аутентификации
- Ролевая модель доступа (RBAC)
- CORS настройки для фронтенда
- Валидация входных данных
- Защита от SQL инъекций через JPA

## База данных

Используется PostgreSQL с миграциями Flyway. Основные таблицы:
- `app_user` - пользователи системы
- `pet` - питомцы
- `appointment` - записи на прием
- `anamnesis` - анамнезы
- `health_update` - обновления состояния здоровья
- `diagnosis` - диагнозы
- `treatment` - лечение
- `medical_procedure` - медицинские процедуры
- `quarantine` - карантин
- `sector` - секторы
- `clinic` - клиники
- `slot` - слоты времени
- `rating_and_reviews` - рейтинги и отзывы

## Развертывание

Система может быть развернута с использованием Docker Compose:
- Backend контейнер
- Frontend контейнер
- PostgreSQL контейнер
- MinIO контейнер

## Генерация клиента

Для генерации клиента из OpenAPI спецификации используется OpenAPI Generator:
```bash
./gradlew generateOpenApiSpec
./gradlew openApiGenerate
```

## Тестирование

Postman коллекция доступна в файле `VetCare_API.postman_collection.json` для тестирования API.
