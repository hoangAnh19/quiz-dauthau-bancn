-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "PublicationStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "AttemptType" AS ENUM ('PRACTICE', 'EXAM');

-- CreateEnum
CREATE TYPE "AttemptStatus" AS ENUM ('IN_PROGRESS', 'SUBMITTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "SettingType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'JSON');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "userId" UUID NOT NULL,
    "roleId" UUID NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "roleId" UUID NOT NULL,
    "permissionId" UUID NOT NULL,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "QuestionBank" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "PublicationStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuestionBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "questionBankId" UUID NOT NULL,
    "parentId" UUID,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" UUID NOT NULL,
    "questionBankId" UUID NOT NULL,
    "categoryId" UUID,
    "status" "PublicationStatus" NOT NULL DEFAULT 'DRAFT',
    "currentVersion" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionVersion" (
    "id" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "explanation" TEXT,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerOption" (
    "id" UUID NOT NULL,
    "questionVersionId" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AnswerOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamConfiguration" (
    "id" UUID NOT NULL,
    "questionBankId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "questionCount" INTEGER NOT NULL,
    "durationMinute" INTEGER,
    "passingPercent" INTEGER NOT NULL DEFAULT 50,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ExamConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAttempt" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "examConfigId" UUID,
    "type" "AttemptType" NOT NULL,
    "status" "AttemptStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "score" INTEGER,
    "totalQuestions" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" TIMESTAMP(3),

    CONSTRAINT "ExamAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAttemptQuestion" (
    "id" UUID NOT NULL,
    "attemptId" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "position" INTEGER NOT NULL,
    "questionSnapshot" JSONB NOT NULL,
    "selectedOptionIds" TEXT[],
    "isCorrect" BOOLEAN,
    "answeredAt" TIMESTAMP(3),

    CONSTRAINT "ExamAttemptQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeProgress" (
    "userId" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "attemptCount" INTEGER NOT NULL DEFAULT 0,
    "correctCount" INTEGER NOT NULL DEFAULT 0,
    "lastAnsweredAt" TIMESTAMP(3),

    CONSTRAINT "PracticeProgress_pkey" PRIMARY KEY ("userId","questionId")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "userId" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("userId","questionId")
);

-- CreateTable
CREATE TABLE "ImportJob" (
    "id" UUID NOT NULL,
    "sourceName" TEXT NOT NULL,
    "checksum" TEXT NOT NULL,
    "dryRun" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "report" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "ImportJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteSetting" (
    "key" TEXT NOT NULL,
    "type" "SettingType" NOT NULL,
    "value" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSetting_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" UUID NOT NULL,
    "actorId" UUID,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_code_key" ON "Role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_code_key" ON "Permission"("code");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionBank_slug_key" ON "QuestionBank"("slug");

-- CreateIndex
CREATE INDEX "Category_questionBankId_position_idx" ON "Category"("questionBankId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "Category_questionBankId_slug_key" ON "Category"("questionBankId", "slug");

-- CreateIndex
CREATE INDEX "Question_questionBankId_status_idx" ON "Question"("questionBankId", "status");

-- CreateIndex
CREATE INDEX "Question_categoryId_status_idx" ON "Question"("categoryId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionVersion_questionId_version_key" ON "QuestionVersion"("questionId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerOption_questionVersionId_position_key" ON "AnswerOption"("questionVersionId", "position");

-- CreateIndex
CREATE INDEX "ExamConfiguration_questionBankId_isActive_idx" ON "ExamConfiguration"("questionBankId", "isActive");

-- CreateIndex
CREATE INDEX "ExamAttempt_userId_startedAt_idx" ON "ExamAttempt"("userId", "startedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ExamAttemptQuestion_attemptId_position_key" ON "ExamAttemptQuestion"("attemptId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "ExamAttemptQuestion_attemptId_questionId_key" ON "ExamAttemptQuestion"("attemptId", "questionId");

-- CreateIndex
CREATE INDEX "ImportJob_checksum_idx" ON "ImportJob"("checksum");

-- CreateIndex
CREATE INDEX "Announcement_isActive_startsAt_endsAt_idx" ON "Announcement"("isActive", "startsAt", "endsAt");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_createdAt_idx" ON "AuditLog"("entityType", "entityId", "createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_actorId_createdAt_idx" ON "AuditLog"("actorId", "createdAt");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_questionBankId_fkey" FOREIGN KEY ("questionBankId") REFERENCES "QuestionBank"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_questionBankId_fkey" FOREIGN KEY ("questionBankId") REFERENCES "QuestionBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionVersion" ADD CONSTRAINT "QuestionVersion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerOption" ADD CONSTRAINT "AnswerOption_questionVersionId_fkey" FOREIGN KEY ("questionVersionId") REFERENCES "QuestionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamConfiguration" ADD CONSTRAINT "ExamConfiguration_questionBankId_fkey" FOREIGN KEY ("questionBankId") REFERENCES "QuestionBank"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_examConfigId_fkey" FOREIGN KEY ("examConfigId") REFERENCES "ExamConfiguration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttemptQuestion" ADD CONSTRAINT "ExamAttemptQuestion_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "ExamAttempt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttemptQuestion" ADD CONSTRAINT "ExamAttemptQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeProgress" ADD CONSTRAINT "PracticeProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeProgress" ADD CONSTRAINT "PracticeProgress_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
