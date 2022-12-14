package com.sda.backend.orderlines;

import java.util.List;

public interface IOrderlineService {
    List<Orderline> findAllOrderlines();

    Orderline findById(Integer id);

    Orderline createOrderline(Orderline orderline);

    List<OrderlineModel> findModelsByUserId(int userId);

    List<Orderline> findByUserId(int userId);

    void deleteById(int orderlineId);

    void updateAmountById(int orderlineId, int amount);
}
