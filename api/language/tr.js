module.exports = {
	Register: {
		dbUser: 'Bu kullanıcı zaten kayıtlı.',
		NotNewUser: 'Kullanıcı oluşturulamadı.',
		NewUser: 'Kullanıcı oluşturuldu.'
	},
	Login: {
		success: 'Başarılı giriş.',
		error: 'Kullanıcı girişi yapılamadı.'
	},
	Product: {
		getProducts: {
			true: 'Tüm ürünler getirildi.',
			false: 'Hata. Ürünler getirilemedi.'
		},
		productAdd: {
			true: 'Ürün başarıyla eklendi.',
			false: 'Hatta. Ürün eklenemedi.'
		},
		productFindById: {
			true: 'Ürün id\'ye göre bulundu.',
			false: 'Hata. Ürün id\'ye göre bulunamadı.'
		},
		deleteProduct: {
			true: 'Ürün silindi',
			false: 'Hata. Ürün silinemedi.'
		}
	},
	Order: {
		getOrder: {
			true: 'Tüm siparişler getirildi.',
			false: 'Hata. Siparişler getirilemedi.'
		},
		createOrder: {
			true: 'Sipariş başarıyla eklendi.',
			false: 'Hata. Sipariş eklenemedi.'
		},
		getOrderFindById: {
			true: 'Sipariş id\'ye göre bulundu.',
			false: 'Hata. Sipariş id\'ye göre bulunamadı.'
		},
		deleteOrder: {
			true: 'Sipariş silindi',
			false: 'Hata. Sipariş silinemedi.'
		}
	},
	checkAuth: {
		sendMessage: {
			Unauthorized: 'Yetkilendirme başarısız oldu.',
			BadReq: 'Geçersiz token'
		}
	}
};