import { User } from './model/User';

const user = new User({ id: 1, name: 'better ebver' });

user.on('change', () => {
  console.log(user);
});

user.fetch();

user.save();
