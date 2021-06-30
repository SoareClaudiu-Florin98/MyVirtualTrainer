using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyVirtualTrainer.Data.Migrations
{
    public partial class semicompletedatabase2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Food_DailyReport_DailyReportId",
                table: "Food");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Diary_DiaryId",
                table: "User");

            migrationBuilder.DropTable(
                name: "DailyReport");

            migrationBuilder.DropTable(
                name: "Diary");

            migrationBuilder.DropIndex(
                name: "IX_User_DiaryId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "DiaryId",
                table: "User");

            migrationBuilder.RenameColumn(
                name: "DailyReportId",
                table: "Food",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Food_DailyReportId",
                table: "Food",
                newName: "IX_Food_UserId");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Food",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_Food_User_UserId",
                table: "Food",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Food_User_UserId",
                table: "Food");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Food");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Food",
                newName: "DailyReportId");

            migrationBuilder.RenameIndex(
                name: "IX_Food_UserId",
                table: "Food",
                newName: "IX_Food_DailyReportId");

            migrationBuilder.AddColumn<int>(
                name: "DiaryId",
                table: "User",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Diary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diary", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DailyReport",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DiaryId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyReport", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DailyReport_Diary_DiaryId",
                        column: x => x.DiaryId,
                        principalTable: "Diary",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_User_DiaryId",
                table: "User",
                column: "DiaryId");

            migrationBuilder.CreateIndex(
                name: "IX_DailyReport_DiaryId",
                table: "DailyReport",
                column: "DiaryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Food_DailyReport_DailyReportId",
                table: "Food",
                column: "DailyReportId",
                principalTable: "DailyReport",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Diary_DiaryId",
                table: "User",
                column: "DiaryId",
                principalTable: "Diary",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
