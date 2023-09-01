using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ArtForWelfare.Models;

public partial class AfsContext : DbContext
{
    public AfsContext()
    {
    }

    public AfsContext(DbContextOptions<AfsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<AfwFund> AfwFunds { get; set; }

    public virtual DbSet<Area> Areas { get; set; }

    public virtual DbSet<Art> Arts { get; set; }

    public virtual DbSet<Artist> Artists { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Ngo> Ngos { get; set; }

    public virtual DbSet<NgoFund> NgoFunds { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<State> States { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=mkmeena97;database=afs", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.AdminId).HasName("PRIMARY");

            entity.ToTable("admins");

            entity.HasIndex(e => e.AdminId, "admin_id").IsUnique();

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.AdminId).HasColumnName("admin_id");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(50)
                .HasColumnName("lname");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.Admins)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("admin_ibfk_1");
        });

        modelBuilder.Entity<AfwFund>(entity =>
        {
            entity.HasKey(e => e.AfwfId).HasName("PRIMARY");

            entity.ToTable("afw_fund");

            entity.HasIndex(e => e.ArtId, "art_id");

            entity.Property(e => e.AfwfId).HasColumnName("afwf_id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.ArtId).HasColumnName("art_id");
            entity.Property(e => e.Datetime)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("datetime");

            entity.HasOne(d => d.Art).WithMany(p => p.AfwFunds)
                .HasForeignKey(d => d.ArtId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("afw_fund_ibfk_1");
        });

        modelBuilder.Entity<Area>(entity =>
        {
            entity.HasKey(e => e.AreaId).HasName("PRIMARY");

            entity.ToTable("areas");

            entity.HasIndex(e => e.AreaId, "area_id").IsUnique();

            entity.HasIndex(e => e.CityId, "city_id");

            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.AreaName)
                .HasMaxLength(100)
                .HasColumnName("area_name");
            entity.Property(e => e.CityId).HasColumnName("city_id");

            entity.HasOne(d => d.City).WithMany(p => p.Areas)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("area_ibfk_1");
        });

        modelBuilder.Entity<Art>(entity =>
        {
            entity.HasKey(e => e.ArtId).HasName("PRIMARY");

            entity.ToTable("arts");

            entity.HasIndex(e => e.ArtId, "art_id").IsUnique();

            entity.HasIndex(e => e.ArtistId, "artist_id");

            entity.HasIndex(e => e.CatId, "cat_id");

            entity.HasIndex(e => e.NgoId, "ngo_id");

            entity.Property(e => e.ArtId).HasColumnName("art_id");
            entity.Property(e => e.ArtName)
                .HasMaxLength(50)
                .HasColumnName("art_name");
            entity.Property(e => e.ArtistId).HasColumnName("artist_id");
            entity.Property(e => e.CatId).HasColumnName("cat_id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Image).HasColumnName("image");
            entity.Property(e => e.NgoId).HasColumnName("ngo_id");
            entity.Property(e => e.Price)
                .HasPrecision(10, 2)
                .HasColumnName("price");
            entity.Property(e => e.Status)
                .HasMaxLength(10)
                .HasColumnName("status");

            entity.HasOne(d => d.Artist).WithMany(p => p.Arts)
                .HasForeignKey(d => d.ArtistId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("art_ibfk_1");

            entity.HasOne(d => d.Cat).WithMany(p => p.Arts)
                .HasForeignKey(d => d.CatId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("art_ibfk_2");

            entity.HasOne(d => d.Ngo).WithMany(p => p.Arts)
                .HasForeignKey(d => d.NgoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("art_ibfk_3");
        });

        modelBuilder.Entity<Artist>(entity =>
        {
            entity.HasKey(e => e.ArtistId).HasName("PRIMARY");

            entity.ToTable("artists");

            entity.HasIndex(e => e.AreaId, "area_id");

            entity.HasIndex(e => e.ArtistId, "artist_id").IsUnique();

            entity.HasIndex(e => e.Contact, "contact").IsUnique();

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.ArtistId).HasColumnName("artist_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Contact)
                .HasMaxLength(20)
                .HasColumnName("contact");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(50)
                .HasColumnName("lname");
            entity.Property(e => e.Speciality)
                .HasMaxLength(100)
                .HasColumnName("speciality");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Artists)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("artists_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.Artists)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("artists_ibfk_1");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CatId).HasName("PRIMARY");

            entity.ToTable("categories");

            entity.HasIndex(e => e.CatId, "cat_id").IsUnique();

            entity.Property(e => e.CatId).HasColumnName("cat_id");
            entity.Property(e => e.CatName)
                .HasMaxLength(50)
                .HasColumnName("cat_name");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PRIMARY");

            entity.ToTable("cities");

            entity.HasIndex(e => e.CityId, "city_id").IsUnique();

            entity.HasIndex(e => e.StateId, "state_id");

            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CityName)
                .HasMaxLength(50)
                .HasColumnName("city_name");
            entity.Property(e => e.StateId).HasColumnName("state_id");

            entity.HasOne(d => d.State).WithMany(p => p.Cities)
                .HasForeignKey(d => d.StateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("city_ibfk_1");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustId).HasName("PRIMARY");

            entity.ToTable("customers");

            entity.HasIndex(e => e.AreaId, "area_id");

            entity.HasIndex(e => e.Contact, "contact").IsUnique();

            entity.HasIndex(e => e.CustId, "cust_id").IsUnique();

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.CustId).HasColumnName("cust_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Contact)
                .HasMaxLength(20)
                .HasColumnName("contact");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Customers)
                .HasForeignKey(d => d.AreaId)
                .HasConstraintName("customers_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.Customers)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("customers_ibfk_1");
        });

        modelBuilder.Entity<Ngo>(entity =>
        {
            entity.HasKey(e => e.NgoId).HasName("PRIMARY");

            entity.ToTable("ngo");

            entity.HasIndex(e => e.AreaId, "area_id");

            entity.HasIndex(e => e.Contact, "contact").IsUnique();

            entity.HasIndex(e => e.NgoId, "ngo_id").IsUnique();

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.NgoId).HasColumnName("ngo_id");
            entity.Property(e => e.AccountNo)
                .HasMaxLength(20)
                .HasColumnName("account_no");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Certificate).HasColumnName("certificate");
            entity.Property(e => e.Contact)
                .HasMaxLength(20)
                .HasColumnName("contact");
            entity.Property(e => e.Domain)
                .HasMaxLength(255)
                .HasColumnName("domain");
            entity.Property(e => e.NgoName)
                .HasMaxLength(50)
                .HasColumnName("ngo_name");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Ngos)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ngo_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.Ngos)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("ngo_ibfk_1");
        });

        modelBuilder.Entity<NgoFund>(entity =>
        {
            entity.HasKey(e => e.NfId).HasName("PRIMARY");

            entity.ToTable("ngo_fund");

            entity.HasIndex(e => e.ArtId, "art_id");

            entity.HasIndex(e => e.NgoId, "ngo_id");

            entity.Property(e => e.NfId).HasColumnName("nf_id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.ArtId).HasColumnName("art_id");
            entity.Property(e => e.Datetime)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("datetime");
            entity.Property(e => e.NgoId).HasColumnName("ngo_id");

            entity.HasOne(d => d.Art).WithMany(p => p.NgoFunds)
                .HasForeignKey(d => d.ArtId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ngo_fund_ibfk_2");

            entity.HasOne(d => d.Ngo).WithMany(p => p.NgoFunds)
                .HasForeignKey(d => d.NgoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ngo_fund_ibfk_1");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.CustId, "fk_cust_id_idx");

            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.CustId).HasColumnName("cust_id");
            entity.Property(e => e.Datetime)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("datetime");
            entity.Property(e => e.PayMode)
                .HasMaxLength(50)
                .HasColumnName("pay_mode");
            entity.Property(e => e.PaymentId)
                .HasMaxLength(50)
                .HasColumnName("payment_id");

            entity.HasOne(d => d.Cust).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CustId)
                .HasConstraintName("fk_cust_id");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.OdId).HasName("PRIMARY");

            entity.ToTable("order_details");

            entity.HasIndex(e => e.ArtId, "art_id");

            entity.HasIndex(e => e.OrderId, "order_id");

            entity.Property(e => e.OdId).HasColumnName("od_id");
            entity.Property(e => e.ArtId).HasColumnName("art_id");
            entity.Property(e => e.OrderId).HasColumnName("order_id");

            entity.HasOne(d => d.Art).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.ArtId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("order_details_ibfk_2");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("order_details_ibfk_1");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.QueId).HasName("PRIMARY");

            entity.ToTable("questions");

            entity.HasIndex(e => e.QueId, "que_id").IsUnique();

            entity.Property(e => e.QueId).HasColumnName("que_id");
            entity.Property(e => e.QueText)
                .HasColumnType("text")
                .HasColumnName("que_text");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.HasIndex(e => e.RoleId, "role_id").IsUnique();

            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(255)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.StateId).HasName("PRIMARY");

            entity.ToTable("states");

            entity.HasIndex(e => e.StateId, "state_id").IsUnique();

            entity.Property(e => e.StateId).HasColumnName("state_id");
            entity.Property(e => e.StateName)
                .HasMaxLength(50)
                .HasColumnName("state_name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.QueId, "que_id");

            entity.HasIndex(e => e.RoleId, "role_id");

            entity.HasIndex(e => e.UserId, "user_id").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Answer)
                .HasColumnType("text")
                .HasColumnName("answer");
            entity.Property(e => e.Approve).HasColumnName("approve");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .HasColumnName("password");
            entity.Property(e => e.QueId).HasColumnName("que_id");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.UserName)
                .HasMaxLength(20)
                .HasColumnName("user_name");

            entity.HasOne(d => d.Que).WithMany(p => p.Users)
                .HasForeignKey(d => d.QueId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("users_ibfk_2");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("users_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
