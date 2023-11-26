
create table tai_khoan(
	TenDangNhap varchar(30) primary key,
	ThoiDiemMoTaiKhoan date not null,
	MatKhau varchar(30) not null,
	NgayDangNhapCuoi date not null,
	GioDangNhapCuoi time not null
);

create table tai_khoan_SDT(
	TenDangNhap varchar(30) not null,
	SDT varchar(12) not null
);

create table tai_khoan_email(
	TenDangNhap varchar(30) not null,
	email varchar(30) not null unique
);

create table sinh_vien(
	TenDangNhap varchar(30) not null,
	MSSV int not null unique,
	HoTenDem varchar(40) not null,
	Ten varchar(10) not null,
	Khoa varchar(3) not null,
	SoTrangSoHuu int not null,
	LopSinhHoat varchar(8) not null
);

 create table SPSO(
 	TenDangNhap varchar(30) not null,
	MaSPSO varchar(8) not null,
	HoTenDem varchar(40) not null,
	Ten varchar(10) not null
);
 
 create table SV_LichSuMuaGiay(
 	TenDangNhap varchar(30) ,
	SoTrangMua int not null,
	NgayMuaGiay date not null,
	GioMuaGiay time not null,
	TongSoTienThanhToan int not null,
	PhuongThucThanhToan varchar(30) not null
);

create table may_in(
	MaMayIn varchar(8) primary key,
	CoSo varchar(50) not null,
	Toa varchar(2) not null,
	LoaiMayIn varchar(10) not null,
	TrangThaiHoatDong varchar(3) not null
);

create table in_tai_lieu(
	TenDangNhap varchar(30) not null,
	MaMayIn varchar(8) not null,
	GioIn time not null,
	NgayIn date not null,
	NgayHoanthanhIn date not null,
	GioHoanThanhIn time not null,
	TenFile varchar(40) not null,
	SoTrangTrongFile int not null,
	KhoGiay varchar(2) not null,
	SoMatIn int not null,
	ThoiGianHoanThanhIn time not null,
	NgayLay date not null,
	ThoiGianDenLay time not null,
	SoBanIn int not null,
	TrangThai varchar(20) not null
);

create table quan_ly(
	MaMayIn varchar(8) not null,
	TenDangNhap varchar(30) not null
);

alter table tai_khoan_SDT
add primary key (TenDangNhap,SDT),
add foreign key (TenDangNhap) references tai_khoan(TenDangNhap); 

alter table tai_khoan_email
add primary key (TenDangNhap,email),
add foreign key (TenDangNhap) references tai_khoan(TenDangNhap); 

alter table sinh_vien
add primary key (TenDangNhap),
add foreign key (TenDangNhap) references tai_khoan(TenDangNhap); 

alter table SPSO
add primary key (TenDangNhap),
add foreign key (TenDangNhap) references tai_khoan(TenDangNhap); 

alter table SV_LichSuMuaGiay
add primary key (TenDangNhap, SoTrangMua, NgayMuaGiay, GioMuaGiay, TongSoTienThanhToan),
add foreign key (TenDangNhap) references sinh_vien(TenDangNhap); 

alter table in_tai_lieu
add primary key (TenDangNhap,MaMayIn),
add foreign key (TenDangNhap) references sinh_vien(TenDangNhap),
add foreign key (MaMayIn) references may_in(MaMayIn);

alter table quan_ly
add primary key (MaMayIn, TenDangNhap),
add foreign key (TenDangNhap) references SPSO(TenDangNhap),
add foreign key (MaMayIn) references may_in(MaMayIn);


--them user
create procedure insert_tai_khoan(a1 varchar(30),a2 date,a3 varchar(30),a4 date,a5 time)
language sql
as $$
insert into tai_khoan(TenDangNhap,
					  ThoiDiemMoTaiKhoan,
					  MatKhau,
					  NgayDangNhapCuoi,
					  GioDangNhapCuoi)
values (a1,a2,a3,a4,a5);
$$
--xem log cuar sv theo ten tk
create procedure xem_lich_su_in_mua_giay(stuACC varchar(30))
language sql
as $$
select SoTrangMua,NgayMuaGiay ,GioMuaGiay,TongSoTienThanhToan,PhuongThucThanhToan
from SV_LichSuMuaGiay
where stuACC=TenDangNhap;
$$

--
create procedure xem_lich_su_in_tu_SPSO(NgayXem date)
language sql
as $$
select TenDangNhap,MaMayIn,TenFile,SoBanIn,TrangThai
from in_tai_lieu
where NgayXem=NgayIn;
$$


create procedure xem_lich_su_in_giao_dich(stuACC varchar(30))
language sql
as $$
select SoTrangMua,NgayMuaGiay ,GioMuaGiay,TongSoTienThanhToan
from SV_LichSuMuaGiay
where stuACC=TenDangNhap;
$$

create procedure them_so_trang_cho_sv(stuACC varchar(30), SoTrang int)
language sql
as $$
update sinh_vien
set SoTrangSoHuu=SoTrangSoHuu-SoTrang
where stuACC=TenDangNhap;
$$

create procedure them_may_in(a1 varchar(30),a2 varchar(50),a3 varchar(2),a4 varchar(10),a5 varchar(3))
language sql
as $$
insert into may_in(MaMayIn ,CoSo,Toa,LoaiMayIn,TrangThaiHoatDong)
values (a1,a2,a3,a4,a5);
$$

create procedure cap_nhat_may_in_ON(a1 varchar(8),a2 varchar(50),a3 varchar(2),a4 varchar(10))
language sql
as $$
update may_in
set TrangThaiHoatDong='on'
where (a1= MaMayIn and a2=CoSo and a3=Toa and a4=LoaiMayIn);
$$

create procedure cap_nhat_may_in_OFF(a1 varchar(8),a2 varchar(50),a3 varchar(2),a4 varchar(10))
language sql
as $$
update may_in
set TrangThaiHoatDong='off'
where (a1= MaMayIn and a2=CoSo and a3=Toa and a4=LoaiMayIn);
$$

create procedure xoa_may_in(a1 varchar(8),a2 varchar(50),a3 varchar(2),a4 varchar(10))
language sql
as $$
delete from may_in
where (a1= MaMayIn and a2=CoSo and a3=Toa and a4=LoaiMayIn);
$$




--drop schema public cascade;















