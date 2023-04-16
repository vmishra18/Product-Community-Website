package com.nagarro.exittest.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long productId;
	private String productName;
	private String brand;
	private double prodPrice;

	private String productCode;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_code_fk", referencedColumnName = "productId")
	private List<Review> prodReviews;

//	@ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "id")
//	@JsonIgnore
//	private User user;

	public Product(Long productId, String productName, String brand, double prodPrice, String productCode,
			List<Review> prodReviews) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.brand = brand;
		this.prodPrice = prodPrice;
		this.productCode = productCode;
		this.prodReviews = prodReviews;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}

	public Long getProductId() {
		return productId;
	}

	public double getProdPrice() {
		return prodPrice;
	}

	public void setProdPrice(double prodPrice) {
		this.prodPrice = prodPrice;
	}

}
