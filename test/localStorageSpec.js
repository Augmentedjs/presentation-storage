describe("Given Presentation Local Storage", () => {
	describe("Given non persistent Local Storage", () => {
		const namedStorage = Storage.LocalStorageFactory.getStorage(false, "testingnamedStorage");
		const globalLocalStorage = Storage.LocalStorageFactory.getStorage(false);

		it("Can support namespaced local storage", () => {
			expect(namedStorage).to.not.be.undefined;
		});

		it("Can support global local storage", () => {
			expect(globalLocalStorage).to.not.be.undefined;
		});

		describe("Given Namespaced Local Storage", () => {
			it("Can add an Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", "bonobo");
				expect(namedStorage.getItem("monkey")).to.equal("bonobo");
				expect(namedStorage.length()).to.equal(1);
			});

			it("Can add a complex Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", { color: "brown", age: 1, name: "Lance Link" });
				expect(namedStorage.getItem("monkey")).to.deep.equal({ color: "brown", age: 1, name: "Lance Link" });
				expect(namedStorage.length()).to.equal(1);
			});

			it("Can get an Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", "bonobo");
				expect(namedStorage.getItem("monkey")).to.equal("bonobo");
			});

			it("Can remove an Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", "bonobo");
				namedStorage.removeItem("monkey");
				expect(namedStorage.getItem("monkey")).to.equal(null);
				expect(namedStorage.length()).to.equal(0);
			});

			it("Can add an Item as Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				namedStorage.setItem("monkeys", array);
				expect(namedStorage.getItem("monkeys")).to.deep.equal(array);
			});

			it("Can get an Item Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				namedStorage.setItem("monkeys", array);
				const item = namedStorage.getItem("monkeys");
				expect(item.length).to.equal(3);
			});
		});


		describe("Given Global Local Storage", () => {
			it("Can add an Item", () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");
			});
			it("Can get an Item", () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");
			});
			it("Can remove an Item", () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				globalLocalStorage.removeItem("donkey");
				expect(globalLocalStorage.getItem("donkey")).to.equal(null);
			});

			it("Can add an Item as Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				globalLocalStorage.setItem("donkeys", array);
				expect(globalLocalStorage.getItem("donkeys")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkeys");
			});

			it("Can get an Item Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				globalLocalStorage.setItem("donkeys", array);
				const item = globalLocalStorage.getItem("donkeys");
				//console.log("Array: " + item );
				expect(item.length).to.equal(3);
				globalLocalStorage.removeItem("donkeys");
			});
		});
	});
	describe("Given persistent Local Storage", () => {
		const namedStorage = Storage.LocalStorageFactory.getStorage(true,"testingPersistentnamedStorage");
		const globalLocalStorage = Storage.LocalStorageFactory.getStorage(true);

		it("Can support persistent namespaced local storage", () => {
			expect(namedStorage).to.not.be.undefined;
		});

		it("Can support persistent global local storage", () => {
			expect(globalLocalStorage).to.not.be.undefined;
		});

		describe("Given persistent Namespaced Local Storage", () => {
			it("Can add an Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", "bonobo");
				expect(namedStorage.getItem("monkey")).to.not.be.undefined;
				expect(namedStorage.length()).to.equal(1);
			});

			it("Can get an Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", "bonobo");
				expect(namedStorage.getItem("monkey")).to.not.be.undefined;
			});

			it("Can remove an Item", () => {
				namedStorage.clear();
				namedStorage.setItem("monkey", "bonobo");
				namedStorage.removeItem("monkey");
				expect(namedStorage.getItem("monkey")).to.equal(null);
				expect(namedStorage.length()).to.equal(0);
			});

			it("Can add an Item as Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				namedStorage.setItem("monkeys", array);
				expect(namedStorage.getItem("monkeys")).to.not.be.undefined;
			});

			it("Can get an Item Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				namedStorage.setItem("monkeys", array);
				const item = namedStorage.getItem("monkeys");
				expect(item.length).to.equal(3);
				namedStorage.removeItem("monkeys");
			});
		});

		describe("Given persistent Global Local Storage", () => {
			it("Can add an Item", () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");
			});
			it("Can get an Item", () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");
			});
			it("Can remove an Item", () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				globalLocalStorage.removeItem("donkey");
				expect(globalLocalStorage.getItem("donkey")).to.equal(null);
			});

			it("Can add an Item as Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				globalLocalStorage.setItem("donkeys", array);
				expect(globalLocalStorage.getItem("donkeys")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkeys");
			});

			it("Can get an Item Array", () => {
				const array = [ "bonobo", "chimpanzee", "howler" ];
				globalLocalStorage.setItem("donkeys", array);
				const item = globalLocalStorage.getItem("donkeys");
				expect(item.length).to.equal(3);
				globalLocalStorage.removeItem("donkeys");
				globalLocalStorage.clear();
			});
		});
	});
});
