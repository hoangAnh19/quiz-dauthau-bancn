ALTER TABLE "Question" ADD COLUMN "position" INTEGER NOT NULL DEFAULT 0;
CREATE UNIQUE INDEX "Question_questionBankId_position_key" ON "Question"("questionBankId", "position");
