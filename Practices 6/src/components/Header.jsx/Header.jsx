import moment from 'moment';
import logo from '../../assets/logo.png';
const Header = () => {
  return (
    <div className="pt-5 sm:pt-8 space-y-1">
      <img src={logo} alt="" className="mx-auto" />
      <p className="text-neutral-500 text-lg font-normal text-center">
        Journalism Without Fear or Favour
      </p>

      <p className="text-xl font-medium   text-center">
        <span className="text-neutral-700">{moment().format('dddd')},</span>
        <span className="text-neutral-500">
          {' '}
          {moment().format('MMMM D')}, {moment().format('YYYY')}
        </span>
      </p>
    </div>
  );
};

export default Header;
