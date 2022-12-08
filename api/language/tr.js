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
			true: 'Ürün id ye göre bulundu.',
			false: 'Hata. Ürün id ye göre bulunamadı.'
		},
		deleteProduct: {
			true: 'Ürün silindi',
			false: 'Hata. Bu id de ürün yok.'
		}
	},
	Order: {
		getOrder: {
			true: 'Tüm siparişler getirildi.',
			false: 'Hata. Siparişler getirilemedi.'
		},
		completeOrder: {
			true: 'Sipariş başarıyla tamamlandı.',
			false: 'Hata. Sipariş tamamlanamadı.'
		},
		getOrderFindById: {
			true: 'Sipariş id ye göre bulundu.',
			false: 'Hata. Sipariş id ye göre bulunamadı.'
		},
		deleteOrder: {
			true: 'Sipariş silindi',
			false: 'Hata. Bu id de sipariş yok.',
			basketstatus: 'basket statusunde'
		}
	},
	checkAuth: {
		sendMessage: {
			Unauthorized: 'Yetkilendirme başarısız oldu.',
			BadReq: 'Geçersiz token'
		}
	},
	createbasket: {
		true: 'Sipariş oluşturuldu',
		false: 'Hata. Sipariş oluşturulamadı'
	},
	addedprobasket: {
		true: 'Ürün başarıyla sepete eklendi',
		false: 'Hata. Ürün eklenemedi'
	}
};