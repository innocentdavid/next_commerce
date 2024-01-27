import Footer from '../../components/footer';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFilter from '../../components/products-filter';
import ProductsContent from '../../components/products-content';

const Products = () => (
  <>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </>
)
  
export default Products
  